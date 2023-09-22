package com.petrip.member.dao;

import java.sql.SQLException;

import com.petrip.member.dto.Member;

public interface MemberDAO {

	Member accessLogin(Member member) throws SQLException;

}
