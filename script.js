
var vendorids=[];
var vendornames=[];
var availableproducts=[];
var productids=[];
var productnames=[];
var pvendorids=[];
var selectedvendor;



d3.csv("vendors.csv",function(csv){
            csv.map(function(d){
                vendorids.push(d.vendor);
                vendornames.push(d.name);
            })

console.log("vendorids's length",vendorids.length);
displayVendors();
});

d3.csv("products.csv",function(csv){
            csv.map(function(p){
                pvendorids.push(p.vendor);
                productids.push(p.product);
                productnames.push(p.name);
            })
 console.log("productnames outside method",productnames[0]);
 displayProducts();
 });


function displayVendors(f) {
    // displayProducts();
     console.log("selectedvendor inside dvmethod",f);

    var select = document.getElementById("selectVendor");
    for(var i = 0; i < vendornames.length; i++) {
        var opt = vendornames[i];
        //console.log("opt",opt);
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = vendorids[i];
        selectedvendor =el.value
        console.log("vendor id",selectedvendor);
        select.appendChild(el);
    
          }
       displayProducts(f)
     }

function displayProducts(f) {
    console.log("selectedvendor inside dpmethod",f);
    var select = document.getElementById("selectProduct");
    for(i=0;i<pvendorids.length;i++){
        if(f==pvendorids[i]){
            availableproducts.push(productnames[i]);
        }
     }
     console.log("availableproducts",availableproducts);
     for(var i = 0; i < availableproducts.length; i++) {
    var opt = availableproducts[i];
    // console.log("opt",opt);
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    
    }

 
  
}

    



