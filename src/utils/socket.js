let websock = null;

let global_callback = null;
let tempRoomId = null;
let tempUserId = null;
let serverPort = "9091"; // webSocket连接端口
let wsUrl = "ws://" + window.location.hostname + ":" + serverPort;

function createWebSocket(callback,roomId,userId) {
  tempRoomId = roomId;
  tempUserId = userId;
  if (websock == null || typeof websock !== WebSocket) {
    initWebSocket(callback,roomId,userId);
  }
}

function initWebSocket(callback,roomId,userId) {
  global_callback = callback;
  // 初始化websocket
  websock = new WebSocket(wsUrl+"/info_college/chat/"+roomId+"/"+userId);
  websock.onmessage = function (e) {
    websocketonmessage(e);
  };
  websock.onclose = function (e) {
    websocketclose(e);
  };
  websock.onopen = function () {
    websocketOpen();
  };

  // 连接发生错误的回调方法
  websock.onerror = function () {
    console.log("WebSocket连接发生错误");
  };
}

// 实际调用的方法
function sendChatMessage(agentData ) {

  if (websock.readyState === websock.OPEN) {
    // 若是ws开启状态
    websocketsend(agentData);
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendChatMessage(agentData);
    }, 1000);
  } else {
    // 若未开启，等待1s后尝试重新连接并调用发送信息
    setTimeout(function () {
      createWebSocket(global_callback,tempRoomId,tempUserId);
      sendChatMessage(agentData);
    }, 1000);
  }
}

function closeSock() {
  if(websock !== null){
    websock.close();
  }
}

// 数据接收
function websocketonmessage(msg) {
  // console.log("收到数据："+JSON.parse(e.data));
  // console.log("收到数据："+msg);

  // global_callback(JSON.parse(msg.data));

  // 收到信息为Blob类型时
  let result = null;
  if (msg.data instanceof Blob) {
    const reader = new FileReader();
    reader.readAsText(msg.data, "UTF-8");
    reader.onload = (e) => {
      result = JSON.parse(reader.result);
      global_callback(result);
    };
  } else {
    result = JSON.parse(msg.data);
    global_callback(result);
  }
}

// 数据发送
function websocketsend(agentData) {
  //console.log("发送数据：" + agentData);
  console.log("已发送数据");
  websock.send(JSON.stringify(agentData));
}

// 关闭
function websocketclose(e) {
  console.log("connection closed (" + e.code + ")");
}

function websocketOpen(e) {
  console.log("连接已打开");
}

export { sendChatMessage, createWebSocket, closeSock };
