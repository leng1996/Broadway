class Page{
    constructor(options){
        this.list = options.list;
        this.pagelist = options.pagelist;
        this.url = options.url;
        this.num = options.num;
        
        this.index = options.index;
        this.load();
    }

    load(){
        var that = this;
        $.ajax({
            url:"./json/goods.json",
            success:function(res){
                // console.log(res);
                that.res = res;
                that.createPage();
            }
        })
    }

    createPage(){
        var that = this;
        console.log(that.res);
        this.pagelist.pagination(this.res.length,{
            items_per_page:this.num,
            current_page:this.index,
            callback:function(index){
                that.index = index;
                that.display();
            }
        })
    }
    display(){
        var str = "";
        // console.log(this.index)
        // console.log(this.num)
        // console.log(this.goods)
        for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
        //     str +=`<li>
        //     <div class="img">
        //         <img src="${this.res[i].src}" >
        //     </div>
        //     <div class="detail">
        //         ${this.res[i].info}
        //         <span class="price">
        //             ${this.res[i].price}
        //         </span>
        //     </div>
        // </li>`;
        // console.log(this.res[i].src)
        // console.log(this.res[i].a1)
            str += `<li>
            <div class="img">
                <img src="${this.res[i].src}"/>
            </div>
            <div class="detail">
                ${this.res[i].a1}
                <span class="price">
                ${this.res[i].a2}
                </span>
             </div>
             </li>`	
            
            this.list.html(str);
        }
    }

}

new Page({
    list: $("#main-c").children("ul"),
    pagelist:$(".pagination"),
    // url:"http://localhost/json/data/list.json",
    url:"http://localhost/Broadway/json/goods.json",
    
    num :4,
    index:0
    
})
// $("#setPage").change(function(){
//     new Page({
//         list:$("#list").children("ul"),
//         pageList:$(".pagination"),
//         // url:"http://localhost/jqpage/data/list.json",
//         url:"http://localhost/Broadway/json/goods.json",
//         num:parseInt($(this).val()),
//         index:0
//     });
// })

// console.log(1)