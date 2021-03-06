//steganography
var image1=new SimpleImage("skyline.jpg");
var image2=new SimpleImage("usain.jpg");
function forimage1(image)
{
    for(var pix of image.values())
    {
        var temp1=(Math.floor(pix.getRed()/16)*16);
        var temp2=(Math.floor(pix.getGreen()/16)*16);
        var temp3=(Math.floor(pix.getBlue()/16)*16);
        pix.setRed(temp1);
        pix.setGreen(temp2);
        pix.setBlue(temp3);
    }
    return image;
}
function forimage2(image)
{
    for(var pix of image.values())
    {
        var temp1=Math.floor(pix.getRed()/16);
        var temp2=Math.floor(pix.getGreen()/16);
        var temp3=Math.floor(pix.getBlue()/16);
        pix.setRed(temp1);
        pix.setGreen(temp2);
        pix.setBlue(temp3);
    }
    return image;
}
function join2(imagea,imageb)
{
    var result=new SimpleImage(imagea.getWidth(),imagea.getHeight());
    for(var pix of result.values())
    {
        var x=pix.getX();
        var y=pix.getY();
        var temp1=imagea.getPixel(x,y);
        var temp2=imageb.getPixel(x,y);
        pix.setRed(temp1.getRed()+temp2.getRed());
        pix.setGreen(temp1.getGreen()+temp2.getGreen());
        pix.setBlue(temp1.getBlue()+temp2.getBlue());
    }
    return result;
}
image1=forimage1(image1);
image2=forimage2(image2);
print(image1);
print(image2);
var image3=join2(image1,image2);
print(image3);
function extract(image)
{
    var imaget=new SimpleImage(image.getWidth(),image.getHeight());
    for(pix of imaget.values())
    {
        var x=pix.getX();
        var y=pix.getY();
        var temp1=image.getPixel(x,y);
        pix.setRed((temp1.getRed()%16)*16);
        pix.setGreen((temp1.getGreen()%16)*16);
        pix.setBlue((temp1.getBlue()%16)*16);
    }
    return imaget;
}
var result=extract(image3);
print(result);
