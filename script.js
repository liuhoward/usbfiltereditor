
var vendorids=[];
var vendornames=[];
var availableproducts=[];
var productids=[];
var productnames=[];
var pvendorids=[];
var selectedvendor;
var classids=[];
var classnames=[];
var usbclass;



d3.csv("vendors.csv",function(csv){
            csv.map(function(d){
                vendorids.push(d.Vendor);
                vendornames.push(d.Name);
            })

console.log("vendorids's length",vendorids.length);
displayVendors();
displayVendorids();
displayVendorNames();
});

d3.csv("products.csv",function(csv){
            csv.map(function(p){
                pvendorids.push(p.Vendor);
                productids.push(p.Product);
                productnames.push(p.Name);
            })
 displayProducts();
 displayProductids();
 displayProductNames();
 });

  d3.csv("classes.csv",function(csv){
            csv.map(function(c){
                classids.push(c.Class);
                classnames.push(c.Name);
            })
       displayClassids();
       displayClassNames();
           });

function displayClassids(){
            return classids;
       }
function displayClassNames(){
    return classnames;
}

function displayVendorids(){
    return vendorids;
}
function displayVendorNames(){
    return vendornames;
}
function displayProductids(){
    return productids;
}
function displayProductNames(){
    return productnames;
}
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
        // el.value = opt;
        select.appendChild(el);

          }
       displayProducts(f);
       for(i=0;i<vendorids.length;i++){
          if(f==vendorids[i]){
             selectedvendor =vendornames[i];
          }

       }
       console.log("vendor id",selectedvendor);
       return selectedvendor;
     }

function displayProducts(f) {
    console.log("display products called..")
    console.log("selectedvendor inside dpmethod",f);
    var select = document.getElementById("selectProduct");
    select.options.length=0;
    availableproducts.length=0;
    console.log("ap:"+availableproducts);
    for(i=0;i<pvendorids.length;i++){

      // TODO this is just a dirty fix to make something show up in the UI

        // if(f==pvendorids[i]){
            availableproducts.push(productnames[i]);
        // }
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

  return pvendorids;

}
