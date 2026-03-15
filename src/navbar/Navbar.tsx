import { AppBar, Toolbar, Typography, Box, TextField, Autocomplete, IconButton } from "@mui/material";
import { useState } from "react";
import { useSearch } from "./useSearch";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

function Navbar() {
    const [query, setQuery] = useState("");
    const { data, loading } = useSearch(query);
    const navigate = useNavigate();

    return (
        <AppBar sx={{ backgroundColor: "#508ed4" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Crypto Dashboard
                </Typography>
                <Autocomplete
                    sx={{
                        width: 300,
                        backgroundColor: "white",
                        borderRadius: 1
                    }}
                    options={data}
                    loading={loading}
                    forcePopupIcon={false}
                    getOptionLabel={(option) => option.name}
                    inputValue={query}
                    onInputChange={(_, newValue) => setQuery(newValue)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            size="small"
                            placeholder="Search coin..."
                        />
                    )}
                    renderOption={(props, option) => {
                      const { key, ...rest } = props;
                    
                      return (
                        <Box
                          component="li"
                          key={key}
                          {...rest}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%"
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <img
                              src={option.thumb}
                              alt={option.name}
                              width={20}
                              height={20}
                            />
                            <Typography>
                              {option.name}
                            </Typography>
                          </Box>
                      
                          <IconButton
                            size="small"
                            onClick={() => navigate(`/${option.id}`)}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                      );
                    }}
                />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;