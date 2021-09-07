/*A factory function is any function which is not a class or constructor that returns a (presumably new) object. 
In JavaScript, any function can return an object. When it does so without the new keyword, it's a factory function. .*/

const cartoonFactory= (name, description, duration, actor) =>{
    return{
        name: name,
        description: description,
        duration: duration,
        actor: actor,
        theme(){
            console.log(description);
        },
        stars(){
            console.log(actor);
        },
        time(){
            console.log(duration);
        }
    }
}

const tomandjerry = cartoonFactory('tom and jerry', 'cat and mouse', '20 minutes', 'collines')
tomandjerry.theme()
tomandjerry.stars()
tomandjerry.time()
