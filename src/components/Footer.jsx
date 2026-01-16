import React, { useEffect, useState } from "react";

const Footer = () => {

  const [year, setYear] = useState()

  const now = new Date()
  useEffect(()=>{
    setYear(now.getFullYear())
  },[])
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center text-gray-600">
        <p>© {year} Rajalaxmi Beura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
