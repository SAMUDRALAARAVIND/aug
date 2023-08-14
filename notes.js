/*
Regex are patterns used for manipulation or validation of strings.

1. validation of a contact number.
2. finding out number of vowels in a given string.
3. extraction of date/month/year from a standard date format(22-07-2000)
4. find out number of words starting with a specific character.

Character classes(character sets): 
    1. [abc] any one of 'a' , 'b', 'c'
    2. [^abc] other than 'a', 'b', 'c'
    3. \w word characters (a-zA-Z0-9_)
    4. \s [whitespace, tab and line break]
    5. \W otherthen word character
    6. \S other than space charater
    7. \d any digit [0-9]
    8. \D other than digit
    9. .(dot) any character
    8. x|y matches either x or y.

Quantifiers: 
    1. * ( 0 or more preceeding chars)
    2. ? (0 or one preceeding chars)
    3. + ( 1 or more occurance of preceeding char)
    4. {n}
    5. {n,m}, {n,} => n >=0 and m >= n

Assertions (Boundaries): 
    1. ^ beginning of the input
    2. $ end of the input 
    3. \b (word boundary partition between word char and non word char)
    4, \B (
        This is a position where the previous and next character are of the same type
        Either both must be word chars, or both must be non-word chars
    )
    5. x(?=y) look ahead
    6. x(?!y) negetive look ahead
    7. (?<=y)x look behind
    8. (?<!y)x negetive look behind.
Groups: 
    1. () groups the patterns into a single entity.
*/
