import {
    Avatar,
    Box,
    Button,
    Card,
    CardHeader,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
  import React from "react";
  import { Switch } from '@mui/material';
//   import { dressPage1 } from "../../../Data/dress/page1";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { saleProduct, findProducts } from "../../../Redux/Customers/Product/Action";
  import axios from 'axios'; // Using axios for HTTP requests

  const SaleToggle = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customersProduct } = useSelector((store) => store);
    const [filterValue, setFilterValue] = useState({
      availability: "",
      category: "",
      sort: "",
    });
    // const [state, setState] = useState({
    //       checked: false,
    //     });
    // const [isToggled, setIsToggled] = useState(true);

    // features flag
    // const [items, setItems] = useState([]);
    const [productId, setProducts] = useState([]);

    //
   



    
  
    // query 
    const searchParams = new URLSearchParams(location.search);
    const availability = searchParams.get("availability");
    const category = searchParams.get("category");
    const sort = searchParams.get("sort");
    const page = searchParams.get("page");
  
  
    const handlePaginationChange = (event, value) => {
      searchParams.set("page", value-1);
      const query = searchParams.toString();
      navigate({ search: `?${query}` });
    };
  
    useEffect(() => {
      // setFilterValue({ availability, category, sort });
      const data = {
        category:category || "",
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 100000,
        minDiscount: 0,
        sort: sort || "price_low",
        pageNumber:page || 0,
        pageSize: 10,
        stock: availability,
      };
      dispatch(findProducts(data));
    }, [availability, category, sort,page,customersProduct.SaleToggle]);
  
    const handleFilterChange = (e, sectionId) => {
      console.log(e.target.value, sectionId);
      setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
      searchParams.set(sectionId, e.target.value);
      const query = searchParams.toString();
      navigate({ search: `?${query}` });
    };

  //features flags
    // const handleToggleSale = (event) => {
    //     setState({
    //       checked: event.target.checked,
    //     });
    //   };
    // useEffect(() => {
    //     axios.get('/api/sale')
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error('There was an error!', error));
    // }, []);
    useEffect(() => {
        fetchProducts();
    }, []);

    // const handleToggleSale = (itemId) => {
    //     // Update product sale status in the local state
    //     const updatedItem = item.map((item) => {
    //       if (item.id === itemId) {
    //         return { ...item, isOnSale: !item.isOnSale };
    //       }
    //       return item;
    //     });
    //     setItem(updatedItem);
    
    //     // Here, you would also update the product's sale status in your database
    //     console.log(`Product ID ${itemId} sale status updated.`);
    //     // updateProductSaleStatus(productId, newStatus); // Simulated function
    //   };
    // const toggleSaleStatus = (itemId) => {
    //     axios.post(`/api/products/${itemId}/toggleSale`)
    //         .then(() => {
    //             setProducts(products.map(item =>
    //                 item.id === itemId ? { ...item, onSale: !item.onSale } : item
    //             ));
    //         })
    //         .catch(error => console.error('There was an error!', error));
    // };
    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5454/api/sale');
        setProducts(response.data);
    };

    // const toggleSaleStatus = async (productId) => {
    //     await axios.post(`http://localhost:5454/api/products/${productId}/toggleSale`);
    //     fetchProducts(); // Re-fetch products to update the table
    // };
    const toggleSaleStatus = async (productId, isOnSale) => {
      console.log(isOnSale);
      console.log("Active Sale product ", productId);
      dispatch(saleProduct(productId, isOnSale));
      alert('Product Sale Is On....');
    }
    
    


    return (
      <Box width={"100%"}>
        <Card className="p-3">
          <CardHeader
            title="Sort"
            sx={{
              pt: 0,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterValue.category}
                  label="Category"
                  onChange={(e) => handleFilterChange(e, "category")}
                >
                  <MenuItem value={"pant"}>Men's Pants</MenuItem>
                  <MenuItem value={"mens_kurta"}>Men's Kurta</MenuItem>
                  <MenuItem value={"saree"}>Saree</MenuItem>
                  <MenuItem value={"top"}>Lengha Choli</MenuItem>
                  <MenuItem value={"womes_top"}>Women's Top</MenuItem>
                  <MenuItem value={"womens_dress"}>Women's dress</MenuItem>
                  <MenuItem value={"womens_jeans"}>Women's Jeans</MenuItem>
                  <MenuItem value={"mens_shirt"}>Men's Shirt</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Availability
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterValue.availability}
                  label="Availability"
                  onChange={(e) => handleFilterChange(e, "availability")}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"in_stock"}>Instock</MenuItem>
                  <MenuItem value={"out_of_stock"}>Out Of Stock</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sort By Price
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterValue.sort}
                  label="Sort By Price"
                  onChange={(e) => handleFilterChange(e, "sort")}
                >
                  <MenuItem value={"price_high"}>Heigh - Low</MenuItem>
                  <MenuItem value={"price_low"}>Low - Heigh</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
        <Card className="mt-2">
          <CardHeader
            title="All Products"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Sale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customersProduct?.products?.content?.map((products) => (
                  <TableRow
                    hover
                    key={products.name}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                    
                  >
                    <TableCell>
                      {" "}
                      <Avatar alt={products.titel} src={products.imageUrl} />{" "}
                    </TableCell>
  
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                          }}
                        >
                          {products.title}
                        </Typography>
                        <Typography variant="caption">{products.brand}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{products.category.name}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{products.discountedPrice}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{products.quantity}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Button onClick={()=>navigate(`/admin/product/update/${products.id}`)} variant="text">Update</Button>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                    {/* <Switch
                  checked={item.isOnSale}
                  onChange={() => handleToggleSale(item.id)}
                  inputProps={{ 'aria-label': 'sale status' }}
                /> */}
                <Switch
                
  checked={products.onSale}
  onChange={() => toggleSaleStatus(products.id, !products.onSale)} // Toggle the isOnSale parameter
/>

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Card className="mt-2 border">
          {/* <Pagination
            className="py-5 border w-auto"
            size="large"
            count={10}
            color="primary"
            onChange={handlePaginationChange}
          /> */}
  
          <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
            <Pagination
              count={customersProduct.products?.totalPages}
              color="primary"
              className=""
              onChange={handlePaginationChange}
              // value={page}
            />
          </div>
        </Card>
      </Box>
    );
  };
  
  export default SaleToggle;
  