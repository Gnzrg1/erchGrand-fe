import { Typography, Popover } from "@mui/material";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const Section2 = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<HTMLElement | null>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<HTMLElement | null>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handlePopoverOpen1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const handlePopoverOpen2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const handlePopoverOpen3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handlePopoverClose3 = () => {
    setAnchorEl3(null);
  };

  const open3 = Boolean(anchorEl3);
  return (
    <div className="sm:px-16 flex flex-col lg:flex-row gap-12" id="serviceSection">
      <div className="w-full lg:w-1/3 lg:h-[60vh] flex flex-col justify-between items-start gap-4">
        <h2 className="text-white italic" style={{fontSize:"40px"}}><strong>БИДНИЙ ҮЙЛЧИЛГЭЭ</strong></h2>
        <div className="h-2/4 h-[36vh] w-full px-4 py-4 flex justify-start items-end" id="wheel-alignment">
          <Typography 
          className="h-10 w-40 bg-white rounded-lg flex justify-center items-center text-black"
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          >Тэнхлэг тохиргоо</Typography>
          <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }} className="opacity-70 bg-slate-200">
          <div>Жижиг оврын машин: 44,000</div>
          <div>Дунд оврын машин: 55,000</div>
          <div>Том оврын машин: 66,000</div>
          <div>Автобус: 77,000</div>
          <Link href="https://www.facebook.com/erchgrandautoservice/videos/1447901032636631">Дэлгэрэнгүй</Link>
        </Typography>
      </Popover>
        </div>
      </div>
      <div className="w-full h-[30vh] lg:h-[60vh] lg:w-1/3 flex justify-start items-end px-4 py-4" id="smart-diagnosis">
        <Typography className="h-10 w-40 bg-white rounded-lg flex justify-center items-center text-black" 
          aria-owns={open1 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen1}
          onMouseLeave={handlePopoverClose1}>Смарт оношлогоо</Typography>
           <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open1}
        anchorEl={anchorEl1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose1}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }} className="opacity-70 bg-slate-200">smart</Typography>
      </Popover>
      </div>
      <div className="w-full h-[60vh] lg:w-1/3 flex flex-col gap-12">
        <div className="w-full h-2/4 flex justify-start items-end px-4 py-4" id="computer-diagnosis">
          <Typography className="h-10 w-50 bg-white rounded-lg flex justify-center items-center text-black"
          aria-owns={open2 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen2}
          onMouseLeave={handlePopoverClose2}>CRDI оношлогоо</Typography>
           <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open2}
        anchorEl={anchorEl2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose2}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }} className="opacity-70 bg-slate-200">computer</Typography>
      </Popover>
        </div>
        <div className="w-full h-2/4 flex justify-start items-end px-4 py-4" id="balance">
          <Typography className="h-10 w-40 bg-white rounded-lg flex justify-center items-center text-black"
          aria-owns={open3 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen3}
          onMouseLeave={handlePopoverClose3}>Балансе тохиргоо</Typography>
           <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open3}
        anchorEl={anchorEl3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose3}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }} className="opacity-70 bg-slate-200">balance</Typography>
      </Popover>
        </div>
      </div>
    </div>
  );
};
