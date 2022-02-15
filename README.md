# I created this for my personal use, it will grow up by time :)

## basic functions
**capitalize**
capitalize first letter and lowercase others.

    capitalize("HELLO WORLD!")
    >  Hello world!
**noSpace**
remove all spaces.

    noSpace("Hel l o w o r l d !")
    > Helloworld!

**escape**
remove all non-alphanumeric characters.

    escape("Hell_o, = W0r1d!")
    > HelloW0r1d

**escapeSimple**
remove all non-alphanumeric characters but preserve spaces.

    escapeSimple("Hell_o, = W0r1d!")
    > Hello W0r1d
**kebab**
convert string to kebabCase.

    kebab(" Hello world")
    > hello-world
 **oneSpace**
 replace multiple spaces with one space.
 

	   oneSpace("Hello   wolrd")
	   > Hello world

**elaps**
replace spaces, breaklines and tabs with one space.

    elaps("hey     this is\n	 some string")
    > hey this is some string

**validateURL**
validate a url, return false or true.

    validateURL("hello.co")
    validateURL("https://www.npmjs.com/")
    validateURL("www.hello.co")
    > true
    > true
    > true
    validateURL("www.hello.co-m")
    > false
**trimTo**
trim a text to a specific count, takes three params, 
	*trimTo(string,  count,  dotsCount)*
 1. **string:** text
 2. **count:** where to cut the string
 3. **dotsCount** *(optional)***:** add three dots at the end if string length is bigger than dotsCount, if not specified default is 100 character. 
>trimTo(string,  count)

	
		trimTo("hello world", 5)
		> hello
> if **original string length** is bigger than or equal to **9** add three dots at the end.

		 trimTo("123456789", 5, 9)	
		> 12345...
		
**trimToSimple**
return an array with two values, 

 1. first is: the trimed text .
 2. what left in the text.

can be usefull creating ***readmore*** functionality.

    trimToSimple("this is some text",  10)
    > [ 'this is so', 'me text' ]

