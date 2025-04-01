export const Floor = props => {
  const { preview } = props;

  return (
    <div className={'max-w-[440px] mx-auto'}>
      <div className={'bg-gray-medium aspect-[22/25] relative'}>
        <img
          src={preview}
          alt=""
          className={
            'absolute top-0 left-0 w-full h-full object-contain object-center'
          }
        />
      </div>
    </div>
  );
};
