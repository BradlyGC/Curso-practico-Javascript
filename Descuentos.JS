//const precioOriginal = 120; 
//const descuento =18; 

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");

  resultP.innerHTML = "El precio con descuento son: $" + precioConDescuento;
}


const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function calcularPrecioConDescuentoCoupon(precio, descuento) {
  const porcentajePrecioConDescuentoCoupon = 100 - descuento;
  const precioConDescuentoCounpon = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuentoCoupon;
  }

function onClickButtonCouponDiscount() {

  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
   const userCoupon = coupons.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        } else {
            const descuentoCoupon = userCoupon.discount;
            const precioFinalConDescuentoCoupon = calcularPrecioConDescuentoCoupon(priceValue,descuentoCoupon );


  const resultC = document.getElementById("ResultC")          
  resultC.innerHTML = "El precio con cupón es $" + precioConDescuentoCoupon;
}   
}
