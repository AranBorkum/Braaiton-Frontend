import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {HTTPClient} from "../services/http";

function QRCode() {

    const { remote_reference } = useParams();
    const [qrcode, setQrcode] = useState("");

    useEffect(()  => {
        HTTPClient.get("/qr/2c1c4797-e055-474b-9dd9-4f939cfe5ab8/generate-code/")
            .then((res) => {
                setQrcode(res.data);
                console.log(res);
            })
    }, []);

    console.log(qrcode);
    return (
         <>
             <h1>{remote_reference}</h1>
             <img width={"100px"} height={"100px"} src={qrcode.image} />
         </>
     )


}

export default QRCode;