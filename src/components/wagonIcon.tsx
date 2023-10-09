import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

function ShoppingBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
}

export default ShoppingBadge;
