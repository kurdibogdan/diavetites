<?php
class ThumbImage    // https://code.tutsplus.com/how-to-create-a-thumbnail-image-in-php--cms-36421t
{
    private $source;
    public function __construct($sourceImagePath)
    {
        $this->source = $sourceImagePath;
    }
    public function createThumb($destImagePath, $thumbHeight=100)
    {
        // kiterjesztés figyelembe vétele:
        $extension = pathinfo($destImagePath, PATHINFO_EXTENSION);
        if ($extension == "jpg" or
            $extension == "JPG" or
            $extension == "jpeg" or
            $extension == "JPEG")
        {
            $sourceImage = imagecreatefromjpeg($this->source);
        }
        else if ($extension == "png" or 
                 $extension == "PNG")
        {
            $sourceImage = imagecreatefrompng($this->source);
        }
        else
        {
            return(0);
        }
        
        $orgWidth = imagesx($sourceImage);
        $orgHeight = imagesy($sourceImage);
        // $thumbHeight = floor($orgHeight * ($thumbWidth / $orgWidth));
        $thumbWidth = floor($orgWidth * ($thumbHeight / $orgHeight));
        $destImage = imagecreatetruecolor($thumbWidth, $thumbHeight);
        imagecopyresampled($destImage, $sourceImage, 0, 0, 0, 0, $thumbWidth, $thumbHeight, $orgWidth, $orgHeight);
        imagejpeg($destImage, $destImagePath);  // !!
        imagedestroy($sourceImage);
        imagedestroy($destImage);
    }
}

// $objThumbImage = new ThumbImage("/web/uploads/orig.jpg");
// $objThumbImage->createThumb("/web/uploads/thumb.jpg", 125);