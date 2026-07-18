import{c as i,s as d,r as b,f as o,a as m}from"./hoisted.DxixdD2n.js";const l=document.querySelector("[data-cart-layout]"),u=document.querySelector("[data-cart-empty]"),s=document.querySelector("[data-cart-lines]"),f=document.querySelector("[data-subtotal]"),y=document.querySelector("[data-total]"),r=["#ff2e63","#00e5ff","#ffe600","#7cff5b","#8a4bff"];function v(e){const a=r[(e%r.length+r.length)%r.length],c=r[(e+2)%r.length];return`<svg viewBox="0 0 90 112" aria-hidden="true"><rect width="90" height="112" fill="#141018"/><circle cx="30" cy="40" r="34" fill="${a}" opacity="0.55"/><circle cx="66" cy="82" r="26" fill="${c}" opacity="0.5"/><rect x="2" y="2" width="86" height="108" fill="none" stroke="#0d0d0f" stroke-width="4"/></svg>`}function h(e=i.get()){const a=e.length===0;if(l&&(l.hidden=a),u&&(u.hidden=!a),!s)return;s.innerHTML=e.map(t=>`
      <div class="cartrow" data-id="${t.id}">
        <div class="cartrow__art">${v(t.seed)}</div>
        <div>
          <p class="cartrow__name">${t.name}</p>
          <p class="cartrow__meta">${t.size?"Size "+t.size+" · ":""}${o(t.price,"$")} each</p>
          <div class="cartrow__controls">
            <div class="cartrow__stepper">
              <button type="button" data-dec aria-label="Decrease quantity">−</button>
              <span>${t.qty}</span>
              <button type="button" data-inc aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cartrow__remove" data-remove>Remove</button>
          </div>
        </div>
        <p class="cartrow__price">${o(t.price*t.qty,"$")}</p>
      </div>`).join("");const c=m(e);f&&(f.textContent=o(c,"$")),y&&(y.textContent=o(c,"$"))}s?.addEventListener("click",e=>{const a=e.target,c=a.closest(".cartrow");if(!c)return;const t=c.dataset.id,n=i.get().find(p=>p.id===t);n&&(a.closest("[data-inc]")?d(t,n.qty+1):a.closest("[data-dec]")?d(t,n.qty-1):a.closest("[data-remove]")&&b(t))});i.subscribe(e=>h(e));
