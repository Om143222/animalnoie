var bark; value=0
var bird; value=0
var meow; value=0
var lion; value=0

gotResults(
    random; 1-255 rgb
)
heading{
    soundName, gotResults
}
if true label=bark{
    var bark+1
}
if true label=meow{
    var meow+1
}
if true label=lion{
    var lion+1
}
if true label=bird{
    var bird+1
}