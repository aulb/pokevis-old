/*
Bug with data when selecting.
*/
const DATA = [{"DEFAULT":[[16,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,10,2,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,6,2,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0],[0,0,2,5,0,0,3,0,0,0,0,2,0,0,0,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,1,1,2,0,0,0,0,0,0,18,0,0,3,3,0,0,0],[0,0,0,9,0,0,0,0,0,0,0,1,0,2,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"DEFAULT":[[32,0,11,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,3,10,2,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,8,2,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,6,1,0,0,0,0,4,0,0,0,0,0,1,0],[0,1,5,7,0,1,4,0,2,0,0,2,0,0,0,0,0,0],[0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,3,0,0,1,0,0,0,16,0,0,0,0,0,0,0,0],[0,1,2,3,2,1,0,0,0,0,27,0,2,4,3,1,0,0],[0,0,3,9,0,0,0,0,0,0,0,8,0,2,0,0,0,0],[0,0,1,0,0,0,0,0,2,0,0,0,12,0,0,0,0,0],[0,0,3,0,0,0,0,0,0,0,0,1,0,11,0,0,0,0],[0,0,2,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,0,1,0,0,0,0,0,0,2,0,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"DEFAULT":[[47,0,14,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,11,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,3,13,2,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,10,2,0,0,0,0,0,0,0,2,0,2,0,0],[0,0,1,0,6,3,2,0,0,0,4,2,0,2,0,0,1,0],[0,1,8,8,1,1,9,1,2,0,1,2,0,0,0,0,0,0],[0,0,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,3,0,0,2,0,0,0,0,4,0,0,0,0],[0,2,3,0,2,1,0,0,0,19,0,0,0,0,0,0,0,0],[0,1,4,3,6,2,0,0,0,0,39,3,2,4,3,1,3,0],[0,1,4,10,0,0,0,0,0,0,0,13,0,2,0,0,3,0],[0,0,1,0,0,0,0,0,2,0,0,0,16,0,0,0,0,0],[0,0,3,0,0,0,0,0,0,0,0,1,0,22,0,0,0,0],[0,0,2,0,2,0,0,0,0,0,3,0,0,2,4,0,0,0],[0,0,4,0,0,0,0,0,0,0,0,0,0,2,0,4,0,0],[0,0,1,0,0,0,0,1,0,2,0,0,0,0,1,0,4,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"NO-FORM":[[47,0,14,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,11,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,3,13,2,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,10,2,0,0,0,0,0,0,0,2,0,2,0,0],[0,0,1,0,6,3,2,0,0,0,4,2,0,2,0,0,1,0],[0,1,8,8,1,1,9,1,2,0,1,2,0,0,0,0,0,0],[0,0,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,3,0,0,2,0,0,0,0,4,0,0,0,0],[0,2,3,0,2,1,0,0,0,18,0,0,0,0,0,0,0,0],[0,1,4,3,6,2,0,0,0,0,38,3,2,4,3,1,3,0],[0,1,4,10,0,0,0,0,0,0,0,13,0,2,0,0,3,0],[0,0,1,0,0,0,0,0,2,0,0,0,16,0,0,0,0,0],[0,0,3,0,0,0,0,0,0,0,0,1,0,19,0,0,0,0],[0,0,2,0,2,0,0,0,0,0,3,0,0,2,3,0,0,0],[0,0,4,0,0,0,0,0,0,0,0,0,0,2,0,4,0,0],[0,0,1,0,0,0,0,1,0,2,0,0,0,0,1,0,4,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"DEFAULT":[[59,0,19,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],[0,12,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,13,2,0,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,2,0,12,3,0,0,0,0,0,0,0,2,0,2,0,0],[0,0,1,0,6,6,2,0,3,0,4,2,0,2,0,0,1,0],[0,1,12,8,2,1,12,1,3,0,1,3,0,0,0,0,0,0],[0,0,2,3,0,0,0,7,0,0,0,0,0,0,0,2,1,0],[0,0,1,0,1,3,0,0,2,0,0,0,0,6,0,1,0,0],[0,4,3,0,2,1,0,0,1,21,0,0,0,0,0,0,0,0],[0,1,5,3,7,2,0,0,1,0,48,3,2,4,3,2,3,0],[0,1,5,12,1,0,0,0,0,0,0,21,0,2,2,0,3,0],[0,0,1,0,0,0,0,6,3,0,0,0,21,0,0,0,0,0],[0,1,3,0,0,0,0,0,0,0,0,1,0,28,0,0,0,0],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,5,0,0,0],[0,0,4,0,3,0,0,0,0,0,0,0,0,2,0,4,0,0],[0,0,2,0,0,0,0,1,0,2,0,0,0,0,2,0,5,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"NO-FORM":[[59,0,19,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],[0,12,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,13,2,0,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,2,0,12,3,0,0,0,0,0,0,0,2,0,2,0,0],[0,0,1,0,6,6,2,0,3,0,4,2,0,2,0,0,1,0],[0,1,12,8,2,1,12,1,3,0,1,3,0,0,0,0,0,0],[0,0,2,3,0,0,0,7,0,0,0,0,0,0,0,1,1,0],[0,0,1,0,1,3,0,0,2,0,0,0,0,6,0,1,0,0],[0,4,3,0,2,1,0,0,1,20,0,0,0,0,0,0,0,0],[0,1,5,3,7,2,0,0,1,0,47,3,2,4,3,2,3,0],[0,1,4,12,1,0,0,0,0,0,0,21,0,2,2,0,3,0],[0,0,1,0,0,0,0,1,3,0,0,0,21,0,0,0,0,0],[0,1,3,0,0,0,0,0,0,0,0,1,0,25,0,0,0,0],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,4,0,0,0],[0,0,4,0,3,0,0,0,0,0,0,0,0,2,0,4,0,0],[0,0,2,0,0,0,0,1,0,2,0,0,0,0,2,0,5,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"DEFAULT":[[68,1,24,0,0,0,0,0,0,0,1,2,0,2,0,0,0,0],[0,19,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,15,2,0,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,4,0,13,3,0,2,1,0,0,0,1,2,0,2,3,0],[0,1,3,0,6,9,2,0,3,0,4,2,0,2,0,0,1,0],[0,1,12,11,2,3,15,1,6,2,1,6,2,0,0,0,0,0],[0,0,2,3,0,0,0,9,0,3,0,0,0,0,0,2,1,0],[0,1,1,0,1,3,0,0,5,0,0,0,0,6,0,1,0,0],[0,6,3,0,2,1,0,0,1,27,0,0,0,1,0,0,0,0],[0,2,7,3,9,4,0,2,1,0,56,3,2,4,3,2,3,0],[0,2,5,14,1,0,0,0,2,0,0,31,0,2,2,0,3,0],[0,0,5,0,0,0,0,1,3,1,1,1,26,0,1,0,0,0],[0,1,6,0,0,0,0,0,0,1,0,1,0,38,0,0,0,0],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,11,0,0,0],[0,0,4,0,3,0,0,0,0,1,0,0,1,2,3,8,0,0],[0,2,4,0,0,0,0,1,2,2,0,0,0,0,2,3,9,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"NO-FORM":[[68,0,24,0,0,0,0,0,0,0,1,2,0,2,0,0,0,0],[0,19,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,15,2,0,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,3,0,13,3,0,2,1,0,0,0,1,2,0,2,3,0],[0,1,3,0,6,9,2,0,3,0,4,2,0,2,0,0,1,0],[0,1,12,11,2,3,15,1,6,2,1,6,2,0,0,0,0,0],[0,0,2,3,0,0,0,9,0,3,0,0,0,0,0,1,1,0],[0,1,1,0,1,3,0,0,5,0,0,0,0,6,0,1,0,0],[0,6,3,0,2,1,0,0,1,26,0,0,0,0,0,0,0,0],[0,2,7,3,9,4,0,2,1,0,55,3,2,4,3,2,3,0],[0,2,4,14,1,0,0,0,2,0,0,31,0,2,2,0,3,0],[0,0,3,0,0,0,0,1,3,0,0,0,26,0,0,0,0,0],[0,1,6,0,0,0,0,0,0,1,0,1,0,35,0,0,0,0],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,10,0,0,0],[0,0,4,0,3,0,0,0,0,1,0,0,1,2,1,8,0,0],[0,2,4,0,0,0,0,1,2,2,0,0,0,0,2,3,9,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"DEFAULT":[[61,2,24,0,1,0,0,0,0,0,1,2,0,2,0,0,0,5],[0,20,1,0,0,0,0,0,2,0,0,0,0,3,0,0,1,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,2,3,15,2,0,1,0,0,0,1,0,0,0,0,1,3,0],[0,0,4,0,13,3,0,2,1,1,0,0,1,2,0,2,3,0],[0,1,4,0,6,9,2,0,3,0,6,2,0,2,2,2,2,3],[0,2,14,12,2,3,17,1,7,2,1,6,2,0,0,0,0,0],[0,0,2,4,0,0,0,10,0,3,0,4,0,0,0,2,1,0],[0,1,1,0,2,3,0,4,5,0,0,0,0,7,0,1,0,3],[2,7,6,0,3,1,0,0,1,29,1,0,0,2,0,1,0,0],[0,2,7,3,10,4,0,2,1,0,60,3,2,5,3,2,6,2],[0,3,5,15,1,0,0,0,2,0,0,33,0,2,3,1,3,2],[2,0,5,0,0,0,0,1,3,1,1,1,27,0,1,1,0,1],[0,3,6,0,0,0,0,1,0,1,0,1,0,38,0,0,1,6],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,14,0,0,0],[0,0,6,0,5,0,0,0,0,1,0,0,1,4,3,11,0,1],[0,2,5,0,0,0,0,2,2,3,0,0,0,2,2,3,10,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15]],"NO-FORM":[[60,0,23,0,1,0,0,0,0,0,1,2,0,2,0,0,0,4],[0,20,1,0,0,0,0,0,1,0,0,0,0,2,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,2,3,15,2,0,1,0,0,0,1,0,0,0,0,1,3,0],[0,0,3,0,13,3,0,2,1,0,0,0,1,2,0,2,3,0],[0,1,3,0,6,9,2,0,3,0,6,2,0,2,2,2,1,2],[0,1,13,11,2,3,17,1,6,2,1,6,2,0,0,0,0,0],[0,0,2,3,0,0,0,9,0,3,0,4,0,0,0,1,1,0],[0,1,1,0,1,3,0,3,4,0,0,0,0,6,0,1,0,2],[2,6,5,0,2,1,0,0,1,28,1,0,0,1,0,0,0,0],[0,2,7,3,9,4,0,2,1,0,57,3,2,4,3,2,4,2],[0,3,4,14,1,0,0,0,2,0,0,33,0,2,2,0,3,2],[2,0,3,0,0,0,0,1,3,0,0,0,26,0,0,0,0,1],[0,1,6,0,0,0,0,1,0,1,0,1,0,33,0,0,0,5],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,12,0,0,0],[0,0,4,0,4,0,0,0,0,1,0,0,1,2,1,11,0,0],[0,2,5,0,0,0,0,1,2,2,0,0,0,2,2,3,9,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15]],"NO-MEGA":[[60,1,23,0,1,0,0,0,0,0,1,2,0,2,0,0,0,4],[0,20,1,0,0,0,0,0,1,0,0,0,0,2,0,0,1,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,2,3,15,2,0,1,0,0,0,1,0,0,0,0,1,3,0],[0,0,4,0,13,3,0,2,1,0,0,0,1,2,0,2,3,0],[0,1,3,0,6,9,2,0,3,0,6,2,0,2,2,2,1,2],[0,1,13,11,2,3,17,1,6,2,1,6,2,0,0,0,0,0],[0,0,2,3,0,0,0,9,0,3,0,4,0,0,0,2,1,0],[0,1,1,0,1,3,0,4,4,0,0,0,0,6,0,1,0,2],[2,6,5,0,2,1,0,0,1,29,1,0,0,2,0,0,0,0],[0,2,7,3,9,4,0,2,1,0,58,3,2,4,3,2,4,2],[0,3,5,14,1,0,0,0,2,0,0,33,0,2,2,0,3,2],[2,0,5,0,0,0,0,1,3,1,1,1,26,0,1,0,0,1],[0,1,6,0,0,0,0,1,0,1,0,1,0,36,0,0,1,5],[0,0,2,0,3,0,0,1,0,0,3,0,0,2,13,0,0,0],[0,0,4,0,4,0,0,0,0,1,0,0,1,2,3,11,0,0],[0,2,5,0,0,0,0,1,2,2,0,0,0,2,2,3,9,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15]]},{"DEFAULT":[[66,4,27,0,1,0,0,0,0,0,1,2,0,3,0,1,0,5],[0,22,1,0,0,0,0,1,2,0,0,0,0,3,1,0,1,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,2,3,15,2,0,1,0,0,2,3,0,0,0,0,1,5,0],[0,0,4,0,15,3,0,2,3,1,0,0,1,2,0,2,3,0],[0,1,6,1,6,12,2,0,3,0,6,2,3,2,2,2,2,3],[0,4,14,12,2,3,18,1,7,2,3,6,4,0,0,0,0,2],[0,0,3,4,2,0,0,10,0,3,0,5,0,0,0,2,1,1],[0,1,2,0,2,3,0,4,5,0,0,0,0,7,0,1,0,4],[2,7,7,0,3,1,0,1,1,31,1,0,0,2,0,2,1,0],[0,2,7,3,10,4,2,2,1,0,65,3,2,6,3,2,7,4],[0,3,7,15,1,0,0,1,3,0,0,38,0,2,3,2,3,5],[2,0,6,0,0,0,0,1,4,1,1,1,28,1,1,1,0,2],[0,3,7,0,0,0,0,2,1,1,0,1,0,41,0,0,1,7],[0,0,2,0,3,0,0,1,2,0,3,0,0,2,15,0,0,1],[0,2,6,0,7,0,0,0,0,1,0,0,1,4,3,12,0,1],[2,2,5,0,0,0,0,2,2,3,0,0,0,2,2,4,12,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]],"NO-FORM":[[65,2,26,0,1,0,0,0,0,0,1,2,0,3,0,1,0,4],[0,22,1,0,0,0,0,1,1,0,0,0,0,2,1,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,2,3,15,2,0,1,0,0,2,3,0,0,0,0,1,5,0],[0,0,3,0,15,3,0,2,3,0,0,0,1,2,0,2,3,0],[0,1,4,1,6,12,2,0,3,0,6,2,3,2,2,2,1,2],[0,3,13,11,2,3,18,1,6,2,3,6,4,0,0,0,0,2],[0,0,3,3,2,0,0,9,0,3,0,5,0,0,0,1,1,1],[0,1,2,0,1,3,0,3,4,0,0,0,0,6,0,1,0,3],[2,6,6,0,2,1,0,1,1,30,1,0,0,1,0,1,1,0],[0,2,7,3,9,4,2,2,1,0,61,3,2,5,3,2,4,4],[0,3,6,14,1,0,0,1,3,0,0,38,0,2,2,1,3,5],[2,0,4,0,0,0,0,1,4,0,0,0,27,1,0,0,0,2],[0,1,7,0,0,0,0,2,1,1,0,1,0,36,0,0,0,6],[0,0,2,0,3,0,0,1,2,0,3,0,0,2,13,0,0,1],[0,2,4,0,4,0,0,0,0,1,0,0,1,2,1,12,0,0],[2,2,5,0,0,0,0,1,2,2,0,0,0,2,2,4,11,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]],"NO-MEGA":[[65,3,26,0,1,0,0,0,0,0,1,2,0,3,0,1,0,4],[0,22,1,0,0,0,0,1,1,0,0,0,0,2,1,0,1,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0],[0,2,3,15,2,0,1,0,0,2,3,0,0,0,0,1,5,0],[0,0,4,0,15,3,0,2,3,0,0,0,1,2,0,2,3,0],[0,1,5,1,6,12,2,0,3,0,6,2,3,2,2,2,1,2],[0,3,13,11,2,3,18,1,6,2,3,6,4,0,0,0,0,2],[0,0,3,3,2,0,0,9,0,3,0,5,0,0,0,2,1,1],[0,1,2,0,1,3,0,4,4,0,0,0,0,6,0,1,0,3],[2,6,6,0,2,1,0,1,1,31,1,0,0,2,0,1,1,0],[0,2,7,3,9,4,2,2,1,0,63,3,2,5,3,2,5,4],[0,3,7,14,1,0,0,1,3,0,0,38,0,2,2,1,3,5],[2,0,6,0,0,0,0,1,4,1,1,1,27,1,1,0,0,2],[0,1,7,0,0,0,0,2,1,1,0,1,0,39,0,0,1,6],[0,0,2,0,3,0,0,1,2,0,3,0,0,2,14,0,0,1],[0,2,4,0,6,0,0,0,0,1,0,0,1,2,3,12,0,0],[2,2,5,0,0,0,0,1,2,2,0,0,0,2,2,4,11,0],[0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]]}];
const COLORS = ['#BBBDAF', 
				'#A35449', 
				'#75A4F9', 
				'#AD5CA2', 
				'#F0CA42', 
				'#CDBD72', 
				'#C3D221', 
				'#7673DA', 
				'#C3C1D7', 
				'#F95643', 
				'#53AFFE', 
				'#8ED752', 
				'#F8E64E', 
				'#FB61B4', 
				'#66EBFF', 
				'#8B76FF', 
				'#8E6856', 
				'#F9AEFE'];

const TYPES = ['normal',
			   'fighting',
			   'flying',
			   'poison',
			   'ground',
			   'rock', 
			   'bug', 
			   'ghost', 
			   'steel', 
			   'fire', 
			   'water',
			   'grass', 
			   'electric', 
			   'psychic',
			   'ice', 
			   'dragon', 
			   'dark', 
			   'fairy']; 

function getDataset(generation, option) {
	return DATA[generation][option];
}

function getPrimaryTypeCount(generation, option, typeSelections) {
	console.log(typeSelections);
	var current = DATA[generation][option];
	var retobj = [];

	for (var i = 0, length = typeSelections.length; i < length; i++) {
		console.log(TYPES[typeSelections[i]] + ' ' + current[i].reduce(add, 0));
		var temp = {};
		temp['label'] = TYPES[typeSelections[i]];
		temp['count'] = current[typeSelections[i]].reduce(add, 0);
		retobj.push(temp);
	};

	return retobj;
}

function getSecondaryTypeCount(primaryType, generation, option) {
	var idx = TYPES.indexOf(primaryType);
	var current = DATA[generation][option][idx];
	var retobj = [];

	for (var i = 0; i < current.length; i++) {
		var temp = {};
		temp['label'] = TYPES[i];
		temp['count'] = current[i];
		retobj.push(temp);
	};

	return retobj;
}

 
function add(a, b) {
	return a + b;
}

function getCheckedRadio(radios) {
	for (var i = 0, length = radios.length; i < length; i++) {
	    if (radios[i].checked) {
	        // do whatever you want with the checked radio
	        return radios[i];

	        // only one radio can be logically checked, don't check the rest
	        break;
	    }
	}
	return null;
};

function getCheckedBox(boxes) {
	var retlist = [];
	for (var i = 0, length = boxes.length; i < length; i++) {
		if (boxes[i].checked) {
			retlist.push(boxes[i]);
		}
	}
	return retlist || null;
};

function checkAll(boxes) {
	for (var i = 0, length = boxes.length; i < length; i++) {
		boxes[i].checked = true;
	}
};

function getCheckedBoxesValue(boxes) {
	var retlist = [];
	for (var i = 0, length = boxes.length; i < length; i++) {
		if (boxes[i].checked) {
			retlist.push(boxes[i].value);
		}
	}
	return retlist;
};


var generationForm = document.getElementById('generationOption');
var generationOption = document.getElementsByName('generationOption');
var excludeForm = document.getElementById('excludeOption');
var excludeOption = document.getElementsByName('excludeOption');
var typeForm = document.getElementsByClassName('typeSelect');
var typeBox = document.getElementsByClassName('typeSelections');
var generation = Number(getCheckedRadio(generationOption).value);
var exclude = getCheckedRadio(excludeOption).value;
var typeSelections = getCheckedBoxesValue(typeBox).map(Number);
var pokePieDiv = document.getElementById('pokeChart');

function disableOptions(generation, radios) {
	var checkDefault = false;
	var defaultRadio = null;
	// Disable first
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].value == 'DEFAULT') {
			defaultRadio = radios[i];
		}
    	// Check per generation, and disable everything
    	if (generation < 2) {
    		// Disable radio buttons with forms/megas
    		if (radios[i].value == 'NO-FORM' || 
    			radios[i].value == 'NO-MEGA') {
    			radios[i].disabled = true;

    			// Check if its checked
    			if (radios[i].checked) {
    				checkDefault = true;
    			}
    		}
    	} else if (generation > 1 && generation < 5) {
    		// Don't forget to enable option for non megas
    		if (radios[i].value == 'NO-MEGA') {
    			radios[i].disabled = true;

    			// Check if its checked
    			if (radios[i].checked) {
    				checkDefault = true;
    			}
    		} else {
    			radios[i].disabled = false;
    		}
    	} else {
    		// Enable all options for generation six onwards
    		radios[i].disabled = false;
    	}
	}

	if (checkDefault) {
		defaultRadio.checked = true;
	}
};

generationForm.addEventListener('change', function() {
	// cannot remove child if its not there
	pokePieDiv.removeChild(document.getElementById('pokePie'));
	generation = Number(getCheckedRadio(generationOption).value);
	disableOptions(generation, excludeOption);
	exclude = getCheckedRadio(excludeOption).value;
	dataset = getPrimaryTypeCount(generation, exclude, typeSelections);
	createPieChart(dataset);
});

for (var i = 0, length = typeForm.length; i < length; i++) {
	typeForm[i].addEventListener('change', function() {
		pokePieDiv.removeChild(document.getElementById('pokePie'));
		typeSelections = getCheckedBoxesValue(typeBox).map(Number);
		dataset = getPrimaryTypeCount(generation, exclude, typeSelections);
		createPieChart(dataset);
	});	
}

 
excludeForm.addEventListener('change', function() {
	pokePieDiv.removeChild(document.getElementById('pokePie'));
	exclude = getCheckedRadio(excludeOption).value;
	dataset = getPrimaryTypeCount(generation, exclude, typeSelections);
	createPieChart(dataset);
});


var dataset = getPrimaryTypeCount(generation, exclude, typeSelections);
createPieChart(dataset);

function createPieChart(dataset) {
	// Define the height and width of SVG container
	var svgHeight = 405;
	var svgWidth = 505;

	// Define the width and height of the main donut
	var width = 400;
	var height = 400;
	var radius = Math.min(width, height) / 2;

	// The size of the main donut
	// Max logical size would be radius, anything more would be funky
	var donutWidth = 65;

	// Padding between the pizza arcs
	var padding = 0.01;

	// Define some variable for the legends
	var legendRectSize = 18;
	var legendSpacing = 4;

	// Define our own colors for Pokemon
	var color = d3.scaleOrdinal()
				  .domain(TYPES)
				  .range(COLORS);

	// Draw SVG
	var svg = d3.select('#pokeChart')
				.append('svg')
				.attr('id', 'pokePie')
				.attr('width', svgWidth)
				.attr('height', svgHeight)
				.append('g') 
				// Lazy hack, add 2 pixels to count for stroke width
				.attr('transform', 'translate(' + (width / 2 + 2) + ',' + (height / 2 + 2) + ')');

	var arc = d3.arc()
				.innerRadius(radius - donutWidth) // 0
				.outerRadius(radius);

	var pie = d3.pie()
				.padAngle(padding)
				.value(function(d) { return d.count; })
				.sort(null); 

	// Add tooltip to every pie slices
	var tooltip = d3.select('#pokeChart')
					.append('div')
					.attr('class', 'tooltip');

	tooltip.append('div')
		   .attr('class', 'label');

	tooltip.append('div')
		   .attr('class', 'count');

	tooltip.append('div')
		   .attr('class', 'percent');

	// disable sorting of the entries
	// sorting mess with animation
	var path = svg.selectAll('path')
				  .data(pie(dataset))
				  .enter()
				  .append('path')
				  .attr('d', arc)
				  .attr('stroke', function(d, i) {
				  	if (d.data.count > 0) {
						return 'rgb(69,69,69)';				  		
				  	} else {
				  		return null;
				  	}
				  })
				  .attr('fill', function(d, i) {
				  		return color(d.data.label);
				  });
	// .selectAll(el).data(data).enter().append(el)
	// what does that mean???

	// Mouse event handlers. "Come after the definition
	// inside the callback."

	path.on('mouseover', function(d) {
		//
		var total = d3.sum(dataset.map(function(d) {
			return d.count;
		}));

		var percent = Math.round(1000 * d.data.count / total) / 10;

		// Empty out previous label
		tooltip.select('.label img').remove()

		tooltip.select('.label')
			   .append('img')
			   .attr('src', 'lib/assets/types/' + d.data.label + '.gif');
		tooltip.select('.count').html(d.data.count);
		tooltip.select('.percent').html(percent + '%');
		tooltip.style('display', 'block'); //??
	});

	path.on('mouseout', function(d) {
		//
		tooltip.style('display', 'none');
	});

	path.on('mousemove', function(d) {
		tooltip.style('top', (d3.event.layerY + 10) + 'px')
			   .style('left', (d3.event.layerX + 10) + 'px')
	});

	// 3
	var legend = svg.selectAll('.legend')
					.data(color.domain())
					.enter()
					.append('g')
					.attr('class', 'legend')
					.attr('transform', function(d, i) {
						var height = legendRectSize + legendSpacing;
						var offset = height * color.domain().length / 2;
						var horz = 12 * legendRectSize; // relative to the center
						var verz = i * height - offset;
						return 'translate(' + horz + ',' + verz + ')';
					});
	// i is the index of the data

	// Draw the rectangles with
	legend.append('rect')
		  .attr('width', legendRectSize)
		  .attr('height', legendRectSize)
		  .style('fill', color)
		  .style('stroke', 'rgb(69,69,69)');

	legend.append('text')
		  .attr('x', legendRectSize + legendSpacing)
		  .attr('y', legendRectSize - legendSpacing)
		  .text(function(d) { 
		  	return d; 
		  });
}

