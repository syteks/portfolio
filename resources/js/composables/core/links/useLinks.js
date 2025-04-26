/**
 * @return object
 */
export const getDefaultProps = () => {
  return {
    href: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: '_blank'
    }
  };
}
