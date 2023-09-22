package com.petrip.member.service;

import java.sql.SQLException;

import com.petrip.member.dto.Member;

public interface MemberService {

	Member login(Member member) throws SQLException;

}
