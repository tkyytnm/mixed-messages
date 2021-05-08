const greetings = ['Allow Me to Introduce Myself ', 'Good afternoon', 'Good morning', "How are you?", "Hope this email finds you well", "I hope you enjoyed your weekend", "I hope you're doing well", "I hope you're having a great week", "I hope you're having a wonderful day", "It's great to hear from you", "I'm eager to get your advice on...", "I'm reaching out about...", "Thank you for your help", "Thank you for the update", "Thanks for getting in touch", "Thanks for the quick response"];

const randomIndex = Math.floor(Math.random() * greetings.length);

console.log(greetings[randomIndex]);