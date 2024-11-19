import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';  // นำเข้า axios

// สร้าง async thunk เพื่อดึงข้อมูลจาก API ด้วย axios
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    return response.data;   
  } catch (error) {
    throw new Error('Failed to fetch products',error);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
