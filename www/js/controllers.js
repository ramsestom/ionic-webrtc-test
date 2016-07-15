angular.module('starter.controllers', ['SimpleWebRTC'])

.controller('TestCtrl', function($scope) {})

//WEBRTC controllers

/*
.run(function () {
        if (window.MediaStreamTrack) {
          MediaStreamTrack.getSources(function (sources) {
            var videoSources = sources.filter(function (source) {
              return source.kind === 'video';
            });
            console.log('got video sources', videoSources);
          });
        }
})
*/

.controller('BroadcastCtrl', function ($scope) {
        $scope.hasStream = false;
        $scope.roomName = '';
        $scope.isBroadcasting = '';
        // set to value if you want to connect to a specific source
        // source id returned by navigator.getUserMedia
        // $scope.sourceId = '140903818cd57b682ab8d6e23005d501ae3627fdffa0331a88ea580afff9eb71';
        $scope.minWidth = 1280;
        $scope.message = 'hi there';

        $scope.prepare = function prepare() {
          $scope.$broadcast('prepare');
        };

        $scope.start = function start() {
          $scope.$broadcast('start');
        };

        $scope.sendMessage = function sendMessage() {
          $scope.$broadcast('messageAll', $scope.message);
        };
        $scope.$on('channelMessage', function (event, peer, message) {
          console.log('message', message);
        });
      })
	  
.controller('WatchCtrl', function ($scope) {
        $scope.roomName = '';
        $scope.joinedRoom = false;
        $scope.message = 'watching the room';
        $scope.userEmail = 'watcher@gmail.com';

        $scope.joinRoom = function () {
          $scope.$broadcast('joinRoom');
        };
        $scope.leaveRoom = function () {
          $scope.$broadcast('leaveRoom');
        };

        // print broadcasted messages?
        $scope.sendMessage = function sendMessage() {
          $scope.$broadcast('messageAll', $scope.message);
        };
        $scope.$on('channelMessage', function (event, peer, message) {
          console.log('message', message);
        });
      })
	  

;     
