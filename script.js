$(function() {
    let $mainMenuItems = $('#main-menu ul').children('li');
    let $totalMainMenuItems = $mainMenuItems.length;
    let $openedIndex = 2;
   
    function init () {

        bindEvents();
        //verifie l'index puis ovrir l'item
        if(validIndex($openedIndex)){
            animateItem($mainMenuItems.eq($openedIndex),true,700);
        }
        
    };

    function validIndex($indeToCheck){

        return ($indeToCheck>= 0) && ($indeToCheck < $totalMainMenuItems);
    };

    // tout les events 
    function bindEvents (){
        $mainMenuItems.children('.images').click(function(){
            
            let $newIndex = $(this).parent().index();//je recupere le parent et son index
            let $item = $mainMenuItems.eq($newIndex);//retourne l'item que j'ai click
            
            if($openedIndex === $newIndex){
                animateItem($item,false,250);
                $openedIndex = -1;
            }else{
                if(validIndex($newIndex)){
                    //close item open
                    animateItem($mainMenuItems.eq($openedIndex),false,250);
                    animateItem($item,true,250);
                    $openedIndex = $newIndex;
                }  
                
            }
        });
    }


    function animateItem($item, $toOpen,$speed) {

        let $colorImage = $item.find('.color');//je cherche ma class color
        let $itemParametre =$toOpen ?{width:"420px"} : {width:"140px"};
        let $colorImageParametre = $toOpen ? {left:"0"} : {left:"140px"}
        
        $colorImage.animate($colorImageParametre,$speed);//je modifie la position left avec un animation
        $item.animate($itemParametre,$speed)//open description
    }

    init();

});