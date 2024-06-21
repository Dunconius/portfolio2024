import React from 'react';

const SplineEmbed = () => {
  const embedCode = `
    <iframe src='https://my.spline.design/colorbox1copy-99c0c45c9e96526fb2a2d4b2f248c661/' frameborder='0' width='100%' height='100%'></iframe>
  `;

  return (
    <div className="spline-embed" dangerouslySetInnerHTML={{ __html: embedCode }} />
  );
};

export default SplineEmbed;
