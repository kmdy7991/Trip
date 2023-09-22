package com.petrip.member.service;

import java.sql.SQLException;

import com.petrip.member.dao.MemberDAO;
import com.petrip.member.dao.MemberDAOImpl;
import com.petrip.member.dto.Member;

public class MemberServiceImpl implements MemberService {
	private static MemberService instance = new MemberServiceImpl();
	public static MemberService getInstance() {
		return instance;
	}
	
	MemberDAO memberDao;
	public MemberServiceImpl() {
		memberDao = MemberDAOImpl.getInstance();
	}
	@Override
	public Member login(Member member) throws SQLException {
		return memberDao.accessLogin(member);
	}


}
