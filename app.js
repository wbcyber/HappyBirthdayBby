const texts = ['HOBBY', 'SWEETIM','OBIM','NKEM','GLOSSY ANGEL','IMA MMI','']; // Define an array of texts to cycle through

const changeText = (index) => {
    setTimeout(() => {
        const newText = texts[index % texts.length]; // Get the next text from the array
        document.getElementById("newText").innerText = newText;
        changeText(index + 1); // Call changeText again with the next index
    }, 2000); // Change text every 1000 milliseconds (1 second)
};

// Start the text changing process with the first text in the array
changeText(0);



// this on below isnt recurring, but might be useful 
/*

const changeText = (newText, delay, doNext) => {
    setTimeout(() => {
        document.getElementById("newText").innerText = newText;
        doNext && doNext();
    }, delay)

}

changeText('Hobby', 1000, ()=>{
    changeText('sweet', 1000, ()=>{
        changeText('ima', 1000, ()=>{
            changeText('ifunaya', 1000, ()=>{
        
            })
        
        })

    })
})

*/
