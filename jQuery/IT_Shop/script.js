$(document).ready(function(){

    $('.addToCart').click(function(){
        // alert("Hello");
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');

        console.log(id,name,price);

        let items = {
            id: id,
            name: name, 
            price: price,
            qty: 1
        }

        let itemString = localStorage.getItem('shops');
        let itemArray;
        if(itemString == null){
            itemArray = [];
        }else{
            itemArray = JSON.parse(itemString);
        }

        let status = false;
        $.each(itemArray,function(i,v){
            if(id == v.id){
                v.qty++;
                status = true;
            }
        })

        if(status == false) {
            itemArray.push(items);
        }

        let itemData = JSON.stringify(itemArray);
        localStorage.setItem('shops', itemData);
        count();
    })

    function count(){
        let itemString = localStorage.getItem('shops');
        if(itemString){
            let itemArray = JSON.parse(itemString);
            let count = 0;
            $.each(itemArray,function(i,v){
                if(itemArray != 0){
                    count += v.qty;
                    $('#item-count').text(count);
                }else{
                    $('#item-count').text('0');
                }
            })

        }
    }
})