import { AppBar, Toolbar, Typography, Box, TextField, Autocomplete, IconButton } from "@mui/material";
import { useState } from "react";
import { useSearch } from "./useSearch";
import AddIcon from "@mui/icons-material/Add";

function Navbar() {
    const [query, setQuery] = useState("");
    const { data, loading, error } = useSearch({ query });

    return (
        <AppBar>
            <Toolbar>
                <Box
                    component="img"
                    src="/logo.png"
                    alt="logo"
                    sx={{ height: 40, mr: 2 }}
                />
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
                    onInputChange={(event, newValue) => setQuery(newValue)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            size="small"
                            placeholder="Search coin..."
                        />
                    )}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            {...props}
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
                            <IconButton size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    )}
                />

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;