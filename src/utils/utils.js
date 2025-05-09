
export function Capitalize(word) {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
}

export function Truncate(string, limit) {
    let dots = "...";
    if (string?.length > limit) {
        string = string?.substring(0, limit) + dots;
    }
    return string;
}
export function formatAmount(amount) {
    return amount?.toLocaleString();
  }
  export function  formatPrice (price)  {
    return price?.toLocaleString('en-NG')
    
  }
  