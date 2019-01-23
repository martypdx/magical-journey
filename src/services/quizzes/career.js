        
const career = {
    category: 'career',
    icon: {
        image: 'ministry-magic.png',
        text: 'Ministry of Magic Seal'
    },
    title: 'What will you use your magic for?',
    background: '',
    answers: [
        {
            value: 'a',
            prompt: 'After what happened to the Potter family, I have to protect the muggles.'
        },
        {
            value: 'b',
            prompt: 'Share my interest of the complexity and depth of wizardry with the world!'
        },
        {
            value: 'c',
            prompt: 'The world is large and the night full of terrors. I want to know EVERYTHING that other people are doing in the scene!'
        },
        {
            value: 'd',
            prompt: 'Being a wizard is great and all but the real magic happens in the democratic process.'
        },
    ],
    story: {
        intro: 'Diagon Alley or Knocturn Alley? Whatever your pick, you need a wand before you head off for school. Remember, the wand chooses the witch or wizard!',
        choices: {
            a: 'Your wand is 10 3/4" vine wood with a dragon heartstring core. Wizards with this wand seek a greater purpose in life. You have the wand of Hermione Granger.',
            b: 'You were expelled from Hogwarts after being falsely accused of releasing a giant spider. You took your broken wand pieces and fashioned an umbrella for your magic wielding. You have the wand of Rubeus Hagrid.',
            c: 'Your wand is 9 1/4" chestnut with a dragon heartstring core. You betrayed your friends and sold them to the Dark Lord. You have the wand of Peter Pettigrew.',
            d: 'Your wand is 11" holly with a phoenix feather core. These wands are best with someone who seeks dangerous or spiritual quests. You have the wand of Harry Potter.',
            e: 'Go back to Diagon Alley and finish taking the quiz'
        }
    }
};

export default career;