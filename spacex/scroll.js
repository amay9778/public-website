const observer= new IntersectionObserver(callback, function(entries ,IntersectionObserverEntry[] ){
    entries.forEach(function(section:IntersectionObserverEntry){
        if(section.isIntersecting){
        section.target.className'active';

        }
    });

},options :{thredhold:.99 });

document.querySelectorAll(Selection:'section').forEach( callbackfn:section=>{
    observer.observe(section)

});
    
