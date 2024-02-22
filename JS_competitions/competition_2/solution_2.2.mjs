const diff = (first_, second_) => {
    const circle = 360;
    
    let result;
    
    if (second_ >= first_) {
      result = second_ - first_;
      
      if (result > circle / 2) {
        result -= circle;
      }
    } else {
      result = circle - Math.abs(first_ - second_);
    }
    
    return Math.abs(result);
};

export default diff;