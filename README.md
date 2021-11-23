# I only created this for my personnal use, it will grow up by time :)

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
remove all non-alphanumeric characters but preserv spaces.

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
	*trimTo(string,  count,  co)*
 1. **string:** text
 2. **count:** how many inputs you want to output from a string
 3. **dotsCount** *(optional)***:** add three dots at the end if string length is bigger than dotsCount, if not specified default is 100 character. 
>trimTo(string,  count,  co)

	
		trimTo("hello world", 5)
		> hello
> if **original string length** is bigger than or equal to **9** add three dots at the end.

		 trimTo("123456789", 5, 9)	
		> 12345...
		

    

