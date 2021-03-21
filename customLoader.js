module.exports = function myLoader(source) {
  return "export default function noop(){ return{x:0,y:0}; }"
}
