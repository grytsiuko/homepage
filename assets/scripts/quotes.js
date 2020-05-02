quotes = [
    {
        'title': 'On gun control',
        'quote': 'No matter what you do - guns, no guns - it doesn\'t matter. You have people that are ' +
            'mentally ill. And they\'re gonna come through the cracks. And they\'re going to do things that ' +
            'people will not even believe are possible.',
        'sign': 'Meet the Press, 4/10/15'
    },
    {
        'title': 'On global warming',
        'quote': 'It\'s really cold outside, they are calling it a major freeze, weeks ahead of normal. ' +
            'Man, we could use a big fat dose of global warming!',
        'sign': 'Twitter, 19/10/15'
    },
    {
        'title': 'On health care',
        'quote': 'The U.S. cannot allow EBOLA-infected people back. People that go to far away places to ' +
            'help out are great - but must suffer the consequences!',
        'sign': 'Twitter, 2/9/14'
    },
    {
        'title': 'On race',
        'quote': 'I have a great relationship with African Americans, as you possibly have heard. I ' +
            'just have great respect for them. And they like me. I like them.',
        'sign': 'Anderson Cooper 360, 23/7/15'
    },
    {
        'title': 'On fighting terrorism',
        'quote': 'When you see the other side chopping off heads, waterboarding doesn\'t sound very severe.',
        'sign': 'This Week with George Stephanopoulos, 2/8/16'
    },
    {
        'title': 'On why people would vote for him',
        'quote': 'To be blunt, people would vote for me. They just would. Why? Maybe because I\'m so good looking.',
        'sign': 'New York Times, 19/9/99'
    },
    {
        'title': 'On Hillary Clinton',
        'quote': 'If Hillary Clinton can\'t satisfy her husband what makes her think she can satisfy America?',
        'sign': 'Twitter, 16/4/15'
    },
]

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getRandomQuote() {
    let randomNumber = randomInteger(0, quotes.length - 1);
    return quotes[randomNumber];
}

$(document).ready(function () {
    let quote = getRandomQuote();
    $('#quote-wrapper h4').html(quote['title']);
    $('#quote-wrapper blockquote').html(quote['quote']);
    $('#quote-wrapper p').html('Donald Trump, ' + quote['sign']);
    $('#quote-wrapper').css({'display': 'block'});
});

$('#cross').click(function () {
    $(this).parent().parent().fadeOut();
});
