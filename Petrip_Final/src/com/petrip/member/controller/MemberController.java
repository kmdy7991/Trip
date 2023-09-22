package com.petrip.member.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.petrip.member.dto.Member;
import com.petrip.member.service.MemberService;
import com.petrip.member.service.MemberServiceImpl;

@WebServlet("/member")
public class MemberController extends HttpServlet {
	MemberService memberService;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String action = req.getParameter("action");
		switch (action) {
		case "login":
			String path = login(req, resp);
			forward(req, resp, path);
			break;
		}
	}

	private String login(HttpServletRequest req, HttpServletResponse resp) {
		try {
			Member member = new Member();
			member.setId(req.getParameter("id"));
			member.setPassword(req.getParameter("password"));
			
			Member memberInfo = memberService.login(member);
//			System.out.println(memberInfo.getId());
			if(memberInfo != null) {
				HttpSession session = req.getSession();
				session.setAttribute("memberInfo", memberInfo);
				return "/index.jsp";
			} else{
				req.setAttribute("msg", "잘못된 접근 입니다.");
				return "/member/login.jsp";
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "error/error.jsp";
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		doGet(req, resp);
	}

	public void forward(HttpServletRequest req, HttpServletResponse resp, String path) throws ServletException, IOException {
		RequestDispatcher rd = req.getRequestDispatcher(path);
		rd.forward(req, resp);
	}
	
	public void init(ServletConfig config) {
		memberService = MemberServiceImpl.getInstance();
	}
}
