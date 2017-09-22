var ungdungAngularjs = angular.module("ungdungAngularjs", []);
ungdungAngularjs.controller('sinhvienController', function($scope) {
   $scope.sinhvien = {
      ho: "Tran Minh",
      ten: "Chinh",
      hocphi:200,
      tenMonHoc:[
         {ten:'Vat Ly Dai Cuong',diemthi:7.5},
         {ten:'Triet Hoc',diemthi:8.0},
         {ten:'Toan',diemthi:8.5}
      ],
      hoten: function() {
         var doituongsinhvien;
         doituongsinhvien = $scope.sinhvien;
         return doituongsinhvien.ho + " " + doituongsinhvien.ten;
      }
   };
});
