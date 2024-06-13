import { Avatar, Box, Typography } from "@mui/material";
import * as theme from "./DropDownAvatarThemes";
type Props = {
  img: string;
  name: string;
  id: number;
};
type user = {
  user: Props;
  id?: number;
};
const DropDownAvatar = ({ user, id }: user) => {
  return (
    <Box sx={theme.DropDownAvatar}>
      <Avatar alt={user.name} src={user.img} sx={theme.Avatar} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <Typography sx={theme.Name}>{user.name}</Typography>
        {id && (
          <Typography component="p" sx={theme.ItsYou}>
            Это вы
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default DropDownAvatar;
