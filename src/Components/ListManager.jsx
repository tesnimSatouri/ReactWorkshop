import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";

const ListManager = ({ initialItems = [], placeholder = "Add New Item" }) => {
  const [items, setItems] = React.useState(initialItems);
  const [newItem, setNewItem] = React.useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Items
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Box
        component="form"
        onSubmit={addItem}
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          alignItems: "center",
        }}
      >
        <TextField
          label={placeholder}
          variant="outlined"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          fullWidth
        />
        <Button variant="contained" type="submit">
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default ListManager;
