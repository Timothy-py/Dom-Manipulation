function processContent() {
    // retrieve all form values
    const content = document.getElementById('content').value    
    const scramble = document.getElementById('scramble').value
    const repl = document.getElementById('repl').value

    // default replacement
    let replacement = "****"

    // if the user specify a replacement value: use it
    if (repl) {
        replacement = repl.repeat(4)
    }

    // parse scramble and content into a list
    const scramble_list = scramble.split(' ')
    const content_list = content.split(' ')

    let new_content = content
    // iteratively replace words to scramble in content
    // let scramble_counter = 0
    for (let i = 0; i < scramble_list.length; i++) {
        const word = scramble_list[i];
        
        new_content = new_content.replace(word, replacement)
    }
    let total_scanned_words = content_list.length
    let total_words_scrambled = scramble_list.length
    let total_characters_scrambled = 0
    let total_time_taken = 0

    console.log(new_content)
    
    // prevent form from submitting
    return false
}