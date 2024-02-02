"use client"

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function Header() {
  return(
    <header className="flex justify-between">
      <div className="">
        <Link href={'/'}>Главная</Link>
        <Link href={'events'}>События</Link>
        <Link href={'about'}>О нас</Link>
      </div>
      <div>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={['sdfsdfsdfds', 'sdf']}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      </div>
    </header>
  )
}