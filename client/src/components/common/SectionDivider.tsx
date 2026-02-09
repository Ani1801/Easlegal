import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
    return (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 overflow-hidden h-16 w-4 flex justify-center">
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-[1px] h-full bg-[#B59E7A]/40 origin-top"
            />
        </div>
    );
};

export default SectionDivider;
