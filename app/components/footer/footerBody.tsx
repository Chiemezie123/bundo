import React from "react";
import Image from "next/image";
import FrameImage from "@/assets/images/Frame 11149.png";
import { Typography } from "@/components/typography";
import Instagram from "@/assets/svg2/instagram";
import Facebook from "@/assets/svg2/facebook";
import Linkedin from "@/assets/svg2/linkedin";
import Twitter from "@/assets/svg2/twitter";

export default function FooterBody() {
  return (
    <div className="flex gap-[100px] mxs:flex-col-reverse">
      <div className="relative w-[377px] h-[562px] rounded-[15.994px] mmd:hidden mxs:block mxxs:w-[340px]">
        <Image className="absolute" src={FrameImage} alt="frame" fill />
      </div>
      <div className=" flex flex-col gap-[250px] mxs:gap-[58px]">
        <div className="flex items-start gap-[49px] w-[673px] mxs:grid mxs:grid-cols-2 mxs:w-[380px] mxxs:w-[340px]">
          <div className="flex flex-col gap-[20px]">
            <div>
              <Typography
                align="left"
                color="county-green-950"
                variant="h-m"
                fontWeight="bold"
                font="sans"
                className="leading-normal"
              >
                Company
              </Typography>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                About Us
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                Careers
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                Community
              </Typography>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[20px]">
            <div>
              <Typography
                align="left"
                color="county-green-950"
                variant="h-m"
                fontWeight="bold"
                font="sans"
                className="leading-normal"
              >
                Contact
              </Typography>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                Lagos, Nigeria
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                hello@bundo.app
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                info@bundo.app
              </Typography>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[20px]">
            <div>
              <Typography
                align="left"
                color="county-green-950"
                variant="h-m"
                fontWeight="bold"
                font="sans"
                className="leading-normal"
              >
                Support
              </Typography>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                FAQs
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                support@bundo.app
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                help@bundo.app
              </Typography>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[20px]">
            <div>
              <Typography
                align="left"
                color="county-green-950"
                variant="h-m"
                fontWeight="bold"
                font="sans"
                className="leading-normal"
              >
                Legal
              </Typography>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                Privacy policy
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                Terms of use
              </Typography>
              <Typography
                variant="p-s"
                color="mine-shaft-950"
                align="left"
                fontWeight="light"
                font="sans"
                className="leading-normal"
              >
                Vendor Agreement
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex items-center justify-center">
          <div className="flex items-center gap-8 mxs:flex-col mxs:items-start">
            <div>
              <Typography
                color="mine-shaft-950"
                variant="h-m"
                fontWeight="bold"
                font="sans"
              >
                Keep up with us
              </Typography>
            </div>
            <div className="inline-flex items-start gap-[25px] mxs:gap-[18px] mxxs:flex-col">
              <div className="flex items-center">
                <Instagram />
                <Typography
                  color="chateau-green-500"
                  variant="p-m"
                  fontWeight="regular"
                  font="sans"
                  className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
                >
                  Instagram
                </Typography>
              </div>
              <div className="flex items-center">
                <Twitter />
                <Typography
                  color="chateau-green-500"
                  variant="p-m"
                  fontWeight="regular"
                  font="sans"
                  className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
                >
                  Twitter
                </Typography>
              </div>
              <div className="flex items-center">
                <Facebook />
                <Typography
                  color="chateau-green-500"
                  variant="p-m"
                  fontWeight="regular"
                  font="sans"
                  className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
                >
                  Facebook
                </Typography>
              </div>
              <div className="flex items-center">
                <Linkedin />
                <Typography
                  color="chateau-green-500"
                  variant="p-m"
                  fontWeight="regular"
                  font="sans"
                  className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
                >
                  LinkedIn
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
