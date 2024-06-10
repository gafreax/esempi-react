import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Button, Stack, Typography } from "@mui/material"
import { ArrowLeft, ArrowRight, Home } from "@mui/icons-material"

function Product() {
    const [ product, setProduct ] = useState()
    const { productId } = useParams()
    const url = 'https://dummyjson.com/products/'

    useEffect(() => {
        const fetchProduct = async () => {
            const id = productId ?? 1
            const data = await fetch(`${url}/${id}`)
            const jsonData = await data.json()
            if (jsonData) {
                setProduct(jsonData)
            }
        }

        fetchProduct()
    }, [productId])

    const prevPage = productId > 1 ? parseInt(productId) - 1 : 100
    const nextPage = productId < 100 ? parseInt(productId) + 1 : 1

    return <Stack spacing={3}>
        <Box>
            <Link to="/">
                <Button>
                    <Home /> Home
                </Button>
            </Link>
        </Box>
        <Box>
            <Typography variant="h1">
                {product?.title}
            </Typography>
        </Box>
        <Stack direction="row" spacing={3}>
            <Link to={`/product/${prevPage}`}>
                <Button variant="contained">
                    <ArrowLeft /> Precedente
                </Button>
            </Link>
            <Link to={`/product/${nextPage}`}>
                <Button variant="contained">
                    Successivo <ArrowRight />
                </Button>
            </Link>
        </Stack>
        <Box>
            <img
                style={{ maxHeight: "400px" }}
                src={product?.thumbnail}
                alt={product?.title}
                title={product?.title} />
        </Box>
        <Box>
            <Typography variant="body1">
                {product?.description}
            </Typography>
        </Box>
    </Stack>
}

export default Product
