(function(){
  function encodeSrc(p){
    try { return encodeURI(p); } catch(e){ return p; }
  }
  function createImg(src, alt){
    var img = document.createElement('img');
    img.className = 'goods-shop-img';
    img.alt = alt || '';
    img.src = encodeSrc(src);
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = function(){ this.style.display='none'; };
    return img;
  }
  function isGoodsShopTable(tbl){
    if(!tbl) return false;
    var ths = Array.from(tbl.querySelectorAll('tr:first-child th')).map(function(x){return (x.textContent||'').replace(/\s+/g,'').trim();});
    return ths.join('|').includes('매장명(노선)') || ths.join('|').includes('매장명(노선)운영시간위치및특징') || ths.join('|').includes('매장명(노선)운영시간위치및특징');
  }

  function enhanceGoodsShopTable(){
    // '전체 매장 안내' details 안의 첫 번째 data-table(굿즈샵 표)
    var details = Array.from(document.querySelectorAll('details')).find(function(d){
      return (d.textContent||'').includes('전체 매장 안내');
    });
    if(!details) return;
    var tbl = Array.from(details.querySelectorAll('table.data-table')).find(isGoodsShopTable) || details.querySelector('table.data-table');
    if(!tbl) return;

    // 헤더에 사진 컬럼이 없으면 추가
    var headerRow = tbl.querySelector('tr');
    if(!headerRow) return;
    var headerThs = headerRow.querySelectorAll('th');
    var hasPhoto = Array.from(headerThs).some(function(th){return (th.textContent||'').trim()==='사진';});
    if(!hasPhoto){
      var th = document.createElement('th');
      th.textContent = '사진';
      headerRow.appendChild(th);
    }

    // 본문 행들 처리
    var rows = Array.from(tbl.querySelectorAll('tr')).slice(1);
    rows.forEach(function(tr){
      var tds = tr.querySelectorAll('td');
      if(!tds || tds.length===0) return;

      // 구분행(colspan=3)을 colspan=4로 확장 + 빈 칸
      if(tds.length===1){
        var td0 = tds[0];
        var cs = parseInt(td0.getAttribute('colspan')||'1',10);
        if(cs===3){
          td0.setAttribute('colspan','4');
        }
        return;
      }

      // 이미 사진칸 있으면 스킵
      if(tds.length>=4) return;

      var shopCell = tds[0];
      var timeCell = tds[1];
      var infoCell = tds[2];
      var shopText = (shopCell.textContent||'').replace(/\s+/g,' ').trim();
      var infoText = (infoCell.textContent||'').replace(/\s+/g,' ').trim();
      var shopName = shopText.split('(')[0].trim();

      var photoTd = document.createElement('td');
      photoTd.style.verticalAlign = 'middle';

      // 규칙 적용
      // 1) 본사: 5장 (0~4)
      if(/본사/.test(shopText)){
        var wrap = document.createElement('div');
        wrap.className = 'goods-shop-img-grid';
        for(var i=0;i<5;i++){
          wrap.appendChild(createImg('이미지/효빈교통공사_본사_굿즈샵_'+i+'.webp', shopName+' 굿즈샵'));
        }
        photoTd.appendChild(wrap);
      }
      // 2) 덕북/덕남 권역: 위치 문구에 덕빈북도/덕빈남도 있으면 점포명 기반
      else if(/덕빈북도|덕빈남도/.test(infoText)){
        photoTd.appendChild(createImg('이미지/'+shopName+'.webp', shopName+' 굿즈샵'));
      }
      // 3) 빈효선: 지정 이미지
      else if(/\(\s*빈효선\s*\)/.test(shopText)){
        photoTd.appendChild(createImg('이미지/빈효선 굿즈샵.webp', '빈효선 굿즈샵'));
      }
      // 4) 노선별: n호선 굿즈샵
      else {
        var m = shopText.match(/(\d)\s*호선/);
        if(m && m[1]){
          photoTd.appendChild(createImg('이미지/'+m[1]+'호선 굿즈샵.webp', m[1]+'호선 굿즈샵'));
        } else {
          // fallback: 점포명
          photoTd.appendChild(createImg('이미지/'+shopName+'.webp', shopName+' 굿즈샵'));
        }
      }

      tr.appendChild(photoTd);
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', enhanceGoodsShopTable);
  } else {
    enhanceGoodsShopTable();
  }
})();
