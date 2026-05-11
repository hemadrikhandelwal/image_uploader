import cloudinary from "../config/cloudinary.js";
import pool from "../config/db.js";

export const uploadImageController = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    await pool.query(
      "INSERT INTO images (image_url, image_name) VALUES ($1, $2)",
      [result.secure_url, result.original_filename]
    );

    res.json({
      message: "Image uploaded successfully",
      imageUrl: result.secure_url,
      imageName: result.original_filename,
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Image upload failed",
    });
  }
};

export const getAllImageController = async(req,res)=>{
        try{
            const dbResult = await pool.query('Select * from images ORDER BY id ASC')
            res.json({
                message:'Data fetched properly',
                data: dbResult.rows


            })
        }
        catch(error){
            res.status(500).json({
                message:'Unable to fetch the image data '
            })
        }
}

export const deleteImageController = async(req,res)=>{
        try{
            const dbResult = await pool.query('DELETE FROM images WHERE id = $1', [req.params.id])

            const newTable = await pool.query('Select * from images ORDER BY id ASC')
            res.json({
                message:'Image deleted successfully',
                data:newTable.rows
            })
            
        }
        catch(error){
            res.status(500).json({
                message:'Unable to delete the image '
            })
        }
}


/*Validation
1. id del ki invalid ho to kya likhana chiye 
2.

*/ 
