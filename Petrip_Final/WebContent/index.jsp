<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="root" value="${pageContext.request.contextPath}" />

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<c:choose>
	<c:when test="${empty memberInfo}">

		<%@ include file="/member/login.jsp"%>

	</c:when>
	<c:otherwise>

		<%@ include file="/common/header.jsp"%>

		<%@ include file="/member/main.jsp"%>

	</c:otherwise>

</c:choose>
</html>
