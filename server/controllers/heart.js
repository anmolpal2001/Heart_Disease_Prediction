

const predict = async (req, res) => {
    try{

    }
    catch(error){
        console.error('Error:', errorMessage);
        res.status(500).send({ error: "Internal server error" });
    }
}